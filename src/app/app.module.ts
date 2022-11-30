import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppBarComponent } from './app-bar/app-bar.component';
import { SettingsBarComponent } from './settings-bar/settings-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { SchoolModule } from './school/school.module';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { AppService } from './app.service';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';

//:חילקתי את הקומפוננטות בדרך הבאה
//את הניתובים למעלה ואת הסרגל הערות כל אחד בקומפוננטה נפרדת תחת אפ מודול
//כדי לאפשר להשתמש בכל אחד בנפרד
//:מלבד זאת יצאתי מודול של בית ספר ובתוכו את כל מה שתחתיו
//קומפוננטה של המוסדות
//קומפוננטה של סרגל בכלים על הטבלה-בנפרד לצורך שימוש חוזר בקומפ' אחרות
//וקומפוננטה של איפה אני שמראה לאיפה נכנסו ע"י שליחה של אינפוט מהאבא לפי מי שנלחץ בטאבים

@NgModule({
  declarations: [
    AppComponent,
    AppBarComponent,
    SettingsBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SchoolModule,
    MatTabsModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatIconModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
