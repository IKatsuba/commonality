export enum Theme {
  Dark = 'dark',
  Light = 'light',
  System = 'system',
}

export enum Lockfile {
  NPM_LOCKFILE = 'package-lock.json',
  YARN_LOCKFILE = 'yarn.lock',
  PNPM_LOCKFILE = 'pnpm-lock.yaml',
}

export enum DependencyType {
  PEER = 'peer',
  DEVELOPMENT = 'development',
  PRODUCTION = 'production',
}

export enum PackageType {
  NODE = 'node',
  REACT = 'react',
  NEXT = 'next',
}

export enum PackageManager {
  PNPM = 'pnpm',
  YARN = 'yarn',
  NPM = 'npm',
}

export const AllPackagesWildcard = '*' as const;