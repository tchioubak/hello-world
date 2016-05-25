char * fname;
FILE * fp;
bool fgener_init(char * nom) {
   fp = fopen(fmame,"br");
   if(fp!=NULL) return true;
   else return false;
}
void fgener_termin( ) {
    fclose(fp);
}
// unsigned int fgener(char * buf, int longueur) {
void fgener(char * buf, unsigned int longueur) {
    int lec; unsigned int cpt=0;
    // while( cpt<longueur && lec=fgetc(fp) != EOF ) {
    while( cpt<longueur ) { 
        lec=fgetc(fp);
        if(lec==EOF) { rewind(fp); 
            lec=fgetc(fp); 
            if(lec==EOF) return 0;
        }
        *buf++=lec; cpt++;
    }
    return cpt;
}


