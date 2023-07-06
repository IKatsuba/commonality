import { Package } from '@commonalityco/types';
import {
  getPackageDirectories,
  getWorkspaceGlobs,
  getPackageManager,
} from '@commonalityco/data-project';
import { getPackage } from './get-package';

export const getPackages = async ({
  rootDirectory,
}: {
  rootDirectory: string;
}): Promise<Package[]> => {
  const packageManager = await getPackageManager({ rootDirectory });
  const workspaceGlobs = await getWorkspaceGlobs({
    rootDirectory,
    packageManager,
  });
  const packageDirectories = await getPackageDirectories({
    rootDirectory,
    workspaceGlobs,
  });

  return Promise.all(
    packageDirectories.map((directory) => {
      return getPackage({
        rootDirectory,
        directory,
      });
    })
  );
};
