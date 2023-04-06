import { SnapshotData } from '@commonalityco/types';
import { getPackages } from './get-packages';
import { getCurrentBranch } from './get-current-branch';

export const getSnapshot = async (
  rootDirectory: string,
  packageDirectories: string[],
  projectId: string
): Promise<SnapshotData> => {
  const packages = await getPackages({ packageDirectories, rootDirectory });

  const currentBranch = await getCurrentBranch();

  return {
    branch: currentBranch,
    projectId,
    packages,
  };
};