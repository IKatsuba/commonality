import { describe, expect, it, afterEach } from 'vitest';
import { hasReadme } from '../src/has-readme';
import { createTestCheck, text } from 'commonality';
import mockFs from 'mock-fs';

describe('hasReadme', () => {
  afterEach(() => {
    mockFs.restore();
  });

  describe('validate', () => {
    it('should return true if README.md exists', async () => {
      mockFs({
        'README.md': '# Hello',
      });

      const conformer = createTestCheck(hasReadme());

      const result = await conformer.validate();

      expect(result).toBe(true);
    });

    it('should return false if README.md does not exist', async () => {
      mockFs({});

      const conformer = createTestCheck(hasReadme());

      const result = await conformer.validate();

      expect(result).toBe(false);
    });
  });

  describe('fix', () => {
    it('should create README.md with correct content', async () => {
      mockFs({
        'package.json': JSON.stringify({
          name: 'workspaceName',
          description: 'workspaceDescription',
        }),
      });

      const conformer = createTestCheck(hasReadme());

      await conformer.fix();

      const readme = await text('./', 'README.md').get();

      expect(readme).toEqual(['# workspaceName', '> workspaceDescription']);
    });
  });
});
