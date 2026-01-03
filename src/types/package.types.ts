export interface PackageConfig {
  name: string;
  scope: string;
  description: string;
  author: {
    name: string;
    email: string;
    url: string;
  };
}
