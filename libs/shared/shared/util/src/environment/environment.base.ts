export abstract class Environment {
  abstract readonly production: boolean;
  abstract readonly unFootprintApiUri: string;
  abstract readonly unFootprintApiKey: string;
  abstract readonly unFootprintUri: string;
  abstract readonly unFootprintAccountId: string;
}
