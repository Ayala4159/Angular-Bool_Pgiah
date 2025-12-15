import { Component, Input, input, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChsBtn } from '../components/chs-btn/chs-btn';
import { ClrBtn } from '../components/clr-btn/clr-btn';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ChsBtn, ClrBtn],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  color: string[] = ["cadetblue", "teal", "darkslategrey", "rgb(75, 75, 75)", "rgb(124, 121, 121)", "rgb(189, 186, 186)"];
  ansColors: string[][] = [["white", "white", "white", "white"],
  ["white", "white", "white", "white"],
  ["white", "white", "white", "white"],
  ["white", "white", "white", "white"],
  ["white", "white", "white", "white"],
  ["white", "white", "white", "white"],
  ["white", "white", "white", "white"],
  ["white", "white", "white", "white"],
  ["white", "white", "white", "white"],
  ["white", "white", "white", "white"]]
    res: string[][] = [["black", "black", "black", "black"],
  ["black", "black", "black", "black"],
  ["black", "black", "black", "black"],
  ["black", "black", "black", "black"],
  ["black", "black", "black", "black"],
  ["black", "black", "black", "black"],
  ["black", "black", "black", "black"],
  ["black", "black", "black", "black"],
  ["black", "black", "black", "black"],
  ["black", "black", "black", "black"]]
  ans: string[] = Array(4);
  i: number = 0;
  circleChange: string = "";
  acIndex: number = 0;
  msg: string = "";
  isColorExist: boolean = false;
  flag:boolean=false;
  display:string="block"
  ngOnInit() {
    this.choseColor()
    console.log(this.ans);
    
    this.msg="🅱️🅿️הוראות המשחק: עליך לנחש את הצבעים שבחר המחשב ואת מיקומם באמצעות פלטת הצבעים שלמעלה. מחוון התשובות:⚪-אחד מהצבעים נכון, ובמקומו הנכון.⚫-אחד מהצבעים שגוי. 🪩-אחד מהצבעים נכון במקום לא נכון."
  }
  // קבלת הצבע העכשווי ועידכונו במטריצה
  chosenColors(c: string) {
    if(!this.flag){
    this.circleChange = c;
    if (!this.checkColor(c)) {
      this.ansColors[Math.floor(this.acIndex / 4)][this.acIndex % 4] = this.circleChange
      this.acIndex++;
      
    }
    if (this.acIndex % 4 == 0) {
      this.setRslt()
    }
  }
      if(this.acIndex==40){
      this.msg="אויאויאוי!!! לא הצלחת!איזה מעצבן😟😟😟 רוצה לנסות שוב? גרור את הקישור לכרטיסיה חדשה http://localhost:4200/"
      this.display="block"
    }
  }
  //מילוי מערך הצבעים שעל המשתמש לנחש, באופן רנדומלי 
  choseColor() {
    while (this.i < this.ans.length) {
      let num = Math.floor(Math.random() * 6 + 1);
      let j;
      for (j = 0; j < this.i; j++) {
        if (this.ans[j] == this.color[num - 1]) {
          break;
        }
      }
      if (j == this.i) {
        this.ans[this.i] = this.color[num - 1]
        this.i++;
      }
    }
  }
  //בדיקה האם כבר נבחר הצבע הנ"ל
  checkColor(c: string) {
    let v = this.ansColors[Math.floor(this.acIndex / 4)].find((x) => x == c)
    if (v) {
      this.display="block"
      this.msg = "הי 😲 ! בחרת כבר את הצבע הזה...🤭🤭🤭!!!בחר בבקשה צבע שונה 🎨🖌️"
      return true;
    }
    else {
      this.display="none"
      this.msg = ""
      return false;
    }
  }
  
  //מעדכן את מערך התוצאות
  setRslt() {
    let count = 0;
    for (let i = 0; i < 4; i++) {
      let r = this.ans.find((x) => { return x == this.ansColors[(this.acIndex / 4)-1][i] })
      if (r == this.ansColors[(this.acIndex / 4)-1][i])
        this.res[this.acIndex/4-1][count++] = "gray"
    }
    let count2 = 0;
    for (let i = 0; i < 4; i++) {
      if (this.ansColors[(this.acIndex / 4)-1][i] == this.ans[i])
        this.res[this.acIndex/4-1][count2++] = "white"
    }  
    if(count2==4)  {
      this.flag=true
      this.display="block"
      this.msg="וואו, לא תאמין אבל- נחשת נכון!!! ניצחת 🏅🏆🏅📢"
    }
  }
}

