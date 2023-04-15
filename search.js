// SeaGix @v1.0:1 (Worker Side) — to be debugged
class SeaGiX{
    constructor(){
        this.dataset = {}
    }
    compareChar(char1 = "", char2 = ""){
        if(char1 == "" || char2 == "") return 0;
        let R = 0, indexCheck = 0;
        char1 = char1.split("");
        char2 = char2.split("");
        if(char1.length > char2.length){
            let temp = char1;
            char1 = char2;
            char2 = temp;
            
        }
        for(let i = 0; i < char1.length; i++){
            for(let p = indexCheck; p < char2.length; p++){
                if(char1[i] == char2[p] && p <= indexCheck + 2){
                    R++;
                    indexCheck = p;
                    break;
                }
            }
        }
        if(char1[0] == char2[0]) R += 1;
        let t1 = char1.length + 1, t2 = char2.length + 1;
        return R * (t1 + t2) / (t1 * t2 * 2);
    }
    compareString(str1, str2){
        let R = {
            index: 0,
            total: 0
        };
        const arrays = [str1.toLowerCase().replace(/\s+/g, ' ').split(" "), str2.toLowerCase().replace(/\s+/g, ' ').split(" ")];
        for(let i = 0; i < arrays[0].length; i++){
            this.toAdd = {
                index: 0,
                total: 0
            }
            for(let p = 0; p < arrays[1].length; p++){
                let result = this.compareChar(arrays[0][i], arrays[1][p]);
                if(result != 0){
                    if(result >= 0.95){
                       this.toAdd.index = 1;
                       this.toAdd.total++;
                       break;
                    }
                    else {
                    this.toAdd.index++
                    this.toAdd.total += result;
                    }
                }
            }
            R.index += this.toAdd.index;
            R.total += this.toAdd.total
        }
        this.subRate = Math.abs(arrays[0].length - arrays[1].length) * 0.06
        
        return R.total / R.index - this.subRate;
        
    }
    linearSearch(dataset, str, searchBy, minIndex){
        this.searchResult = [];
        for(let i = 0; i < dataset.length; i++){
            this.current = dataset[i];
            this.current.index = {}
            // For comparing the str with different searchBy Index
            this.searchBy = searchBy.split(".");
            for(let p = 0; p < this.searchBy.length; p++){
                //Changing string to object
                if(typeof this.current[this.searchBy[p]] == "string") this.current[this.searchBy[p]] =[ this.current[this.searchBy[p]] ];
                
                this.largestIndex = 0;
                for(let q = 0; q < this.current[this.searchBy[p]].length; q++){
                    this.compareIndex = this.compareString(this.current[this.searchBy[p]][q], str);
                    if(this.compareIndex > this.largestIndex) this.largestIndex = this.compareIndex;
                }
                this.current.index[this.searchBy[p]] = this.largestIndex;
               
            }
            this.currentIndexes = Object.values(this.current.index);
            this.currentIndex = 0;
            for(let sum = 0; sum < this.currentIndexes.length; sum++){
                this.currentIndex += this.currentIndexes[sum];
            }
            this.currentIndex = this.currentIndex / 2;
            if(this.currentIndex > minIndex) this.searchResult[this.searchResult.length] = this.current; 
        }
        this.searchResult.sort((a,b) => {
            return b.index - a.index;
        })
        return this.searchResult;
    }
    search(dataset, str, searchBy, minIndex){
       return console.warn("SeaGiX multi search is yet to develop")
    }
}