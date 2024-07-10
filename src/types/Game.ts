interface Game {
    spill_id: number; 
    tittel: string; 
    pris: number; 
    storrelse: string; 
    beskrivelse: string; 
    utgivelse: string; 
    aldersgrense_id: number; 
    produsent_id: number; 
    anmeldelse_id?: number; 
    bilde_url?: string; 
  };
  