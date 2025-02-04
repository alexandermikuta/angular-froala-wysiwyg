import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { FroalaViewModule } from 'angular-fraola-wysiwyg';

import FroalaEditor from 'froala-editor';

@Component({
    selector: 'app-demo',
    template: `

    <div class="sample">
      <h2>Froala</h2>
      <div id="sample2" [froalaEditor]="imgOptions" [(froalaModel)]="content" (froalaModelChange)="refreshHTML();"></div>
      <h4>HTML Output:</h4>
      <pre id="eg-previewer" class="prettyprint linenums:1">{{ htmlOutput }}</pre>
    </div>
  `,
    standalone: false
})

export class AppComponent implements OnInit {
  public content: string = '<span>My Document\'s Title</span>';
  public htmlOutput: string = this.content;
  editor:any

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

  public refreshHTML() {
    if(this.editor) {
      this.htmlOutput = this.editor.html.get();
    }
  }

  public imgOptions: Object = {
    codeViewKeepActiveButtons: ['selectAll'],
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
      initialized: (e:any) => {
        this.editor = e.getEditor();
        this.refreshHTML();
        this.editor.events.trigger('contentChanged', [], true);
      },
      'codeView.update': this.refreshHTML(),
      contentChanged: this.refreshHTML()
    },
    attribution:false,
  }
}
