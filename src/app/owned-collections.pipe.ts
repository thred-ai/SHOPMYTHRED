import { Pipe, PipeTransform } from '@angular/core';
import { Collection } from './models/collection.model';
import { Globals } from './globals';

@Pipe({
  name: 'ownedCollections'
})
export class OwnedCollectionsPipe implements PipeTransform {

  transform(value: Array<Collection> | undefined, address: string | null | undefined): Array<Collection> {

    if (value && address){
      let same = new Array<Collection>()
      value.forEach(v => {
        if (v.NFTs.findIndex(n => `${n.seller.toLowerCase()}` == `${address.toLowerCase()}`) != -1){
          same.push(v)
        }
        else{
          console.log(v)
        }
      })
      return same
    }
    return []
  }

}
