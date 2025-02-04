import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

import FroalaEditor from 'froala-editor';

@Component({
    selector: 'app-demo',
    template: `

    <div class="sample">
      <h2>Froala</h2>
      <div id="sample2" [froalaEditor]="imgOptions" [(froalaModel)]="content" ></div>
      <h4>Rendered Content:</h4>
      <div [froalaView]="content"></div>
    </div>
  `,
    standalone: false
})

export class AppComponent implements OnInit {

  ngOnInit () {
    FroalaEditor.DefineIcon('alert', { SVG_KEY: 'help' });
    FroalaEditor.RegisterCommand('alert', {
      title: 'Custom-Button-Test',
      focus: false,
      undo: false,
      refreshAfterCallback: false,

      callback: function () {
        alert('Here could be some custom functionality...');
      }
    });
  }

  public myTitle: string;
  onBlurMethod()
  {
    console.log(this.myTitle);
  }

  public content: string = '<span>My Document\'s Title</span>';

  public imgOptions: Object = {
    angularIgnoreAttrs: ['style', 'ng-reflect-froala-editor', 'ng-reflect-froala-model'],
    immediateAngularModelUpdate: true,
    toolbarButtons: {
      'moreText': {
        'buttons': ['bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', 'fontFamily', 'fontSize', 'textColor', 'backgroundColor', 'inlineClass', 'inlineStyle', 'clearFormatting']
      },
      'moreParagraph': {
        'buttons': ['alignLeft', 'alignCenter', 'formatOLSimple', 'alignRight', 'alignJustify', 'formatOL', 'formatUL', 'paragraphFormat', 'paragraphStyle', 'lineHeight', 'outdent', 'indent', 'quote']
      },
      'moreRich': {
        'buttons': ['insertLink', 'insertImage', 'insertVideo', 'insertTable', 'emoticons', 'fontAwesome', 'specialCharacters', 'embedly', 'insertFile', 'insertHR', 'uploadFile']
      },
      'moreMisc': {
        'buttons': ['undo', 'redo', 'fullscreen', 'print', 'getPDF', 'spellChecker', 'selectAll', 'html', 'help', 'alert']
      }
    },
    events: {
      "contentChanged": () => {
      }
    },
    attribution:false,
  }
}
