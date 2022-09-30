import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Member} from "../Modals/Member";
import {GLOBAL} from "../app/app_config";

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  tab: Member[] = GLOBAL._DB.members;

  constructor(private httpClient: HttpClient) {
  }


  saveMember(objectToSubmit: any): Promise<Member> {
    // si j'ai la partie back
    //return this.httpClient.post('linktorestAPI',objectToSubmit).toPromise();

    const memberToSave = {
      ...objectToSubmit,
      id: objectToSubmit.id ?? Math.ceil(Math.random() * 100000).toString(),
      creationDate: objectToSubmit.creationDate ?? new Date().toISOString()
    };
    this.tab = [memberToSave, ...this.tab.filter(item => item.id != memberToSave.id)];
    return new Promise(resolve => resolve(memberToSave));
  }

  getMemberById(currentID: string): Promise<Member> {
    // si j'ai la partie back
    //return this.httpClient.get<Member>('linktorestAPI').toPromise();

    return new Promise(resolve => resolve(this.tab.filter(item => item.id === currentID) [0] ?? null));
  }

  deleteMember(memberId: string): Promise<void> {
    // si j'ai la partie back
    //return this.httpClient.delete<void>('linktorestAPI').toPromise();

    this.tab = [...this.tab.filter(item => item.id != memberId)];
    console.log(this.tab);
    return new Promise(resolve => resolve());
  }

  getAllMembers(): Promise<Member[]> {
    // si j'ai la partie back
    //return this.httpClient.get<Member[]>('linktorestAPI').toPromise();
    return new Promise(resolve => resolve(this.tab));
  }
}
