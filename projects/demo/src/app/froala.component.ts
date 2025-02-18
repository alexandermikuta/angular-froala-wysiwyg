import { Component, Input, Output, forwardRef } from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
    selector: 'froala-component',
    styleUrls: ['./froala.component.css'],
    template: `
    <div [froalaEditor]="options" (froalaModelChange)="onChange($event)" [(froalaModel)]="model"></div>
   `,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => FroalaComponent),
            multi: true,
        }
    ],
    standalone: false
})
export class FroalaComponent implements ControlValueAccessor {

  constructor() {

  }

  
  public options: Object = {
    charCounterCount: false,
    toolbarButtons: ['bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', 'fontFamily', 'fontSize', 'textColor', 'backgroundColor', 'inlineClass', 'inlineStyle', 'clearFormatting'],
    apiKey: '',
    username: '',
    events: {
      
    },
    key: '',
    editInPopup: false,
    update: undefined,
    editorClass: '',
    fullPage: false,
    height: '',
    heightMax: '',
    heightMin: '',
    htmlAllowComments: false,
    htmlAllowedAttrs: [],
    htmlAllowedEmptyTags: [],
    htmlAllowedStyleProps: [],
    htmlAllowedTags: [],
    htmlDoNotWrapTags: [],
    htmlExecuteScripts: false,
    htmlIgnoreCSSProperties: [],
    htmlRemoveTags: [],
    htmlSimpleAmpersand: false,
    htmlUntouched: false,
    iconsTemplate: '',
    keepFormatOnDelete: false,
    multiLine: false,
    preserveTabSpaces: false,
    pasteAllowLocalImages: false,
    pasteAllowedStyleProps: [],
    pasteDeniedAttrs: [],
    pasteDeniedTags: [],
    pastePlain: false,
    placeholderText: '',
    pluginsEnabled: [],
    popupButtons: [],
    requestHeaders: {},
    requestWithCORS: false,
    requestWithCredentials: false,
    scrollableContainer: '',
    shortcutsEnabled: [],
    shortcutsHint: false,
    spellcheck: false,
    tabIndex: 0,
    tabSpaces: 0,
    theme: '',
    tooltips: false,
    width: '',
    imageAddNewLine: false,
    imageAllowedTypes: [],
    imageAltButtons: [],
    imageCORSProxy: '',
    imageDefaultAlign: 'left',
    imageDefaultDisplay: 'block',
    imageDefaultMargin: 0,
    imageDefaultWidth: 0,
    imageEditButtons: [],
    imageInsertButtons: [],
    imageMaxSize: 0,
    imageMinWidth: 0,
    imageMove: false,
    imageMultipleStyles: false,
    imageOutputSize: false,
    imagePaste: false,
    imagePasteProcess: false,
    imageResize: false,
    imageResizeWithPercent: false,
    imageRoundPercent: false,
    imageSizeButtons: [],
    imageSplitHTML: false,
    imageStyles: {},
    imageTUIOptions: undefined,
    imageTextNear: false,
    imageUpload: false,
    imageUploadMethod: '',
    imageUploadParam: '',
    imageUploadParams: undefined,
    imageUploadRemoteUrls: false,
    imageUploadToS3: undefined,
    imageUploadURL: '',
    imageManagerDeleteMethod: 'POST',
    imageManagerDeleteParams: undefined,
    imageManagerDeleteURL: '',
    imageManagerLoadMethod: 'POST',
    imageManagerLoadParams: undefined,
    imageManagerLoadURL: '',
    imageManagerPageSize: 0,
    imageManagerPreloader: '',
    imageManagerScrollOffset: 0,
    imageManagerToggleTags: false,
    inlineStyles: {},
    inlineClasses: {},
    language: '',
    paragraphDefaultSelection: '',
    paragraphFormat: {},
    paragraphFormatSelection: false,
    paragraphMultipleStyles: false,
    paragraphStyles: {},
    listAdvancedTypes: false,
    quickInsertEnabled: false,
    faButtons: [],
    fontAwesomeSets: undefined,
    fontAwesomeTemplate: '',
    specialCharButtons: [],
    specialCharactersSets: [],
    saveInterval: 0,
    saveMethod: '',
    saveParam: '',
    saveParams: undefined,
    saveURL: '',
    tableCellMultipleStyles: false,
    tableCellStyles: {},
    tableColors: [],
    tableColorsButtons: [],
    tableColorsStep: 0,
    tableDefaultWidth: '',
    tableEditButtons: [],
    tableInsertButtons: [],
    tableInsertHelper: false,
    tableInsertHelperOffset: 0,
    tableInsertMaxSize: 0,
    tableMultipleStyles: false,
    tableResizer: false,
    tableResizerOffset: 0,
    tableResizingLimit: 0,
    tableStyles: {},
    videoAllowedProviders: [],
    videoAllowedTypes: [],
    videoDefaultAlign: '',
    videoDefaultDisplay: '',
    videoDefaultWidth: 0,
    videoEditButtons: [],
    videoInsertButtons: [],
    videoMaxSize: 0,
    videoMove: false,
    videoResize: false,
    videoResponsive: false,
    videoSizeButtons: [],
    videoSplitHTML: false,
    videoTextNear: false,
    videoUpload: false,
    videoUploadMethod: '',
    videoUploadParam: '',
    videoUploadParams: undefined,
    videoUploadToS3: undefined,
    videoUploadURL: '',
    wordAllowedStyleProps: [],
    wordDeniedAttrs: [],
    wordDeniedTags: [],
    wordPasteKeepFormatting: false,
    wordPasteModal: false,
    showChangesEnabled: false,
    trackChangesEnabled: false,
    filestackOptions: undefined
  }

  // Begin ControlValueAccesor methods.
  onChange = (_) => {};
  onTouched = () => {};

  // Form model content changed.
  writeValue(content: any): void {
    this.model = content;
  }

  registerOnChange(fn: (_: any) => void): void { this.onChange = fn; }
  registerOnTouched(fn: () => void): void { this.onTouched = fn; }
  // End ControlValueAccesor methods.

  model: any;

}
