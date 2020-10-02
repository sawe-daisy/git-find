export class User {
  constructor(
    public username: string,
    public imgPath: string,
    public repoUrl: string,
    public following: number,
    public followers: number,
    public email: string,
    public bio: string
  ) {}
}
