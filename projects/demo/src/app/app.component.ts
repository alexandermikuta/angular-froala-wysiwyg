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
    // INFO: can be added to toolbar-buttons
    FroalaEditor.RegisterCommand('alert', {
      title: 'Custom-Button-Test',
      focus: false,
      undo: false,
      refreshAfterCallback: false,

      callback: function () {
        alert('Here could be some custom functionality...');
      }
    });
    FroalaEditor.TOOLBAR_BUTTONS = {
      'moreText': {
        'buttons': ['bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', 'fontFamily', 'fontSize', 'textColor', 'backgroundColor', 'inlineStyle', 'clearFormatting']
      },
      'moreParagraph': {
        'buttons': ['alignLeft', 'alignCenter', 'formatOLSimple', 'alignRight', 'alignJustify', 'formatOL', 'formatUL', 'paragraphFormat', 'lineHeight', 'outdent', 'indent']
      },
      'moreRich': {
        'buttons': ['insertLink', 'insertImage', 'insertTable', 'fontAwesome', 'specialCharacters', 'embedly', 'insertHR'],
        'buttonsVisible': 5
      },
      'moreMisc': {
        'buttons': ['undo', 'redo', 'fullscreen', 'spellChecker', 'html', 'help'],
        'align': 'right',
        'buttonsVisible': 5
      }
    };
  }

  public refreshHTML() {
    if(this.editor) {
      this.htmlOutput = this.editor.html.get().replace('<p data-f-id="pbf" style="text-align: center; font-size: 14px; margin-top: 30px; opacity: 0.65; font-family: sans-serif;">Powered by <a href="https://www.froala.com/wysiwyg-editor?pb=1" title="Froala Editor">Froala Editor</a></p>','');
    }
  }

  public imgOptions: Object = {
    codeViewKeepActiveButtons: ['selectAll'],
    angularIgnoreAttrs: ['style', 'ng-reflect-froala-editor', 'ng-reflect-froala-model'],
    immediateAngularModelUpdate: true,
    events: {
      initialized: (e:any) => {
        this.editor = e.getEditor();
        this.refreshHTML();
        this.editor.events.trigger('contentChanged', [], true);
      },
      'codeView.update': this.refreshHTML(),
      contentChanged: this.refreshHTML(),
      "image.beforeUpload": function(files) {
      var editor = this;
       if (files.length) {
         // Create a File Reader.
         var reader = new FileReader();
         // Set the reader to insert images when they are loaded.
         reader.onload = function(e) {
           var result = e.target.result;
           editor.image.insert(result, null, null, editor.image.get());
         };
         // Read image as base64.
         reader.readAsDataURL(files[0]);
       }
       editor.popups.hideAll();
       // Stop default upload chain.
       return false;
      }
    },
    attribution:false,
  }
}
