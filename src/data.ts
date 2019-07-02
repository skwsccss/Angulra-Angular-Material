// export const data = [
//     {
//         category: 1,
//         author: 'abc',
//         company: 'company1',
//         issuedDate: '01/02/2018',
//         updatedDate: '01/02/2018',
//     },
//     {
//         category: 2,
//         author: 'abc2',
//         company: 'company2',
//         issuedDate: '01/02/2018',
//         updatedDate: '01/02/2018',
//     }
// ]
export interface PeriodicElement {
    name: string;
    position: number;
    weight: number;
    symbol: string;
  }

export const data: PeriodicElement[] = [
    {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
    {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
    {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
    {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
    {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
    {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
    {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  ];

  export const data1 = [
    {category: "1", author: 'Hydrogen',  company: 'sersadri', issuedDate: "1/2/2019",     updatedDate:   "1/4/2019"},
    {category: "1", author: 'Helium',    company: 'sersadri', issuedDate: "2/3/2019",     updatedDate:   "3/2/2019"},
    {category: "2", author: 'Lithium',   company: 'sersadri', issuedDate: "3/4/2019",     updatedDate:   "2/4/2019"},
    {category: "2", author: 'Beryllium', company: 'sersadri', issuedDate: "1/5/2019",     updatedDate:   "2/6/2019"},
    {category: "1", author: 'Boron',     company: 'sersadri', issuedDate: "4/6/2019",     updatedDate:   "5/5/2019"},
    {category: "1", author: 'Carbon',    company: 'sersadri', issuedDate: "5/7/2019",     updatedDate:   "6/7/2019"},
    {category: "2", author: 'Nitrogen',  company: 'sersadri', issuedDate: "6/4/2019",     updatedDate:   "6/9/2019"},
    {category: "2", author: 'Oxygen',    company: 'sersadri', issuedDate: "7/3/2019",     updatedDate:   "8/11/2019"},
    {category: "1", author: 'Fluorine',  company: 'sersadri', issuedDate: "8/6/2019",     updatedDate:   "3/2/2019"},
    {category: "1", author: 'Neon',      company: 'sersadri', issuedDate: "6/9/2019",     updatedDate:   "9/5/2019"},
  ];