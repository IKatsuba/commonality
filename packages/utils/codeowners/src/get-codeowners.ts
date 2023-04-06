import fs from 'fs-extra';
import { findFirstExistingFile } from './utils/find-first-existing-file';

export const getCodeowners = async ({
  rootDirectory,
}: {
  rootDirectory: string;
}) => {
  const filePath = await findFirstExistingFile(
    [
      'CODEOWNERS',
      '.github/CODEOWNERS',
      '.gitlab/CODEOWNERS',
      'docs/CODEOWNERS',
    ],
    {
      cwd: rootDirectory,
    }
  );

  if (!filePath) {
    return {};
  }

  if (fs.lstatSync(filePath).isDirectory()) {
    throw new Error(`Found CODEOWNERS but it's a directory: ${filePath}`);
  }

  const lines = fs
    .readFileSync(filePath)
    .toString()
    .split(/\r\n|\r|\n/)
    .filter((line) => Boolean(line) && !line.startsWith('#'))
    .map((line) => {
      return line.trim();
    });

  const linesWithParts = lines
    .map((line) => line.split(/\s+/))
    .map((line) => {
      const firstComment = line.find((linePart) => linePart.includes('#'));

      if (firstComment) {
        const firstComment = line.find((linePart) => linePart.includes('#'));

        if (!firstComment) {
          return line;
        }

        const indexToTrim = line.indexOf(firstComment);
        const lineWithoutComment = line.slice(0, indexToTrim);

        return lineWithoutComment;
      }

      return line;
    });

  const globalOwnersLine =
    linesWithParts.find(([glob]) => {
      return glob === '*';
    }) || [];
  const globalOwners = globalOwnersLine.slice(1);

  const linesWithoutGlobalOwners = linesWithParts.filter((lineWithParts) => {
    const pattern = lineWithParts[0];

    return pattern !== '*';
  });

  const ownerEntries: Record<string, string[]> = {};

  for (const line of linesWithoutGlobalOwners) {
    const [pattern, ...usernames] = line;

    if (pattern) {
      const owners = [...usernames, ...globalOwners];

      ownerEntries[pattern] = owners;
    }
  }

  return ownerEntries;
};