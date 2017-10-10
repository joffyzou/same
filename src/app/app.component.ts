import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'body',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	ngOnInit(){
		var headerH = 62;
		var footerH = 41;
		var section = document.getElementsByTagName("section")[0];
		var bodyH = document.body.clientHeight;
		section.style.minHeight = bodyH - headerH - footerH +'px';
		window.onresize = function(){
			var bodyH = document.body.clientHeight;
			section.style.minHeight = bodyH - headerH - footerH +'px';
		}
	}
}
