import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ServiceService {
  id = environment.gitApi;
  private username: string;
  private client_id = "2c31944ff336b7283f4a";
  private client_secret = "d8e6f45409de394ef11ef2ffe43d31f417085177";

  constructor(private http: HttpClient) {}

  getProfileInfo(term): Observable<any> {
    interface ApiResponse {
      username: string;
      imgPath: string;
      repoUrl: string;
      following: number;
      followers: number;
      email: string;
      bio: string;
    }
    return this.http.get<ApiResponse>(
      "https://api.github.com/users/" +
        term +
        "?client_id=" +
        this.client_id +
        "&client_secret" +
        this.client_secret
    );
  }
}
