function joust(listField, vKnightLeft, vKnightRight) {
    if (vKnightLeft > 0 || vKnightRight > 0){
        let knight1= '$->'
        let knight2 = '<-P'
        let array1 = listField[0].split(' ');
        let array2= listField[1].split(' ');
        
        while(array1.join(' ').indexOf('>') < array2.join(' ').indexOf('<')){
                    let index= array1.indexOf(knight1)+vKnightLeft;
                    array1[array1.indexOf(knight1)]= ''
                    array1[index] = knight1;
                
                    let index01= array2.indexOf(knight2)-vKnightRight
                    array2[array2.indexOf(knight2)]=''
                    array2[index01] = knight2;
            calls++;
        }
        return [array1.join(' '), array2.join(' ')]; 
    }   
    return listField; 
}
