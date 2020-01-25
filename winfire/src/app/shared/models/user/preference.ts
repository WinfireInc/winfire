import { LanguageType } from '../common/language-type.enum';

export class Preference {
    languageType: LanguageType;
    date: Date;

    constructor(languageType: LanguageType) {
        this.languageType = languageType;
        this.date = new Date();
    }
}
