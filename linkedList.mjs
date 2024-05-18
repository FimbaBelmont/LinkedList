function linkedList (value,next) {return {
    value : value,
    next: next,


    append(value) {
        if(this.next === null) {
            this.next = (node(value,null))
        }
        else if(this === null) {
             this.value = value;
             this.next = null;
        }
        else {
        let tmp = this.next;
        while(tmp.next){
            tmp = tmp.next;
        }
        if(tmp.next ===null) {
            tmp.next =(node(value,null))
        }}
    },

    prepend(value) {
        let tmp = this.next;
        this.next = node(this.value,tmp);
        this.value = value;
    },
    
    size(){
        if (this.value === null) {
            return 0 
        }
        else {
            let counter = 1;
            let tmp = this;
            while(tmp.next){
                tmp = tmp.next;
                counter++;
            }
            return counter
        }
    },

    head(){
        return this.value
    },

    tail(){
        if(this.next === null) {
            return this.value;
        }
        let tmp = this.next;
        while(tmp.next) {
            tmp = tmp.next;
        }
        return tmp.value
    },

    at(index){
        if(index === 0 ) {
            return this.value
        }
        else if (index < 0) {return undefined}
        else {
            let tmp = this.next;
            for (let i=1; i<index;i++){
                tmp = tmp.next;
            }
            return tmp.value;
        }
    },

    pop(){
        if (this.next === null) {
            this.value ===null
        } else {
            let tmp = this.next;
            while (tmp.next.next){
               tmp = tmp.next; 
            }
            tmp.next = null
        }
    },

    contains(target){
        let tmp = node(this.value, this.next);
        while (tmp) {
            if (tmp.value === target) {
                return true
            }
            else {
                tmp = tmp.next;
            }
        }
        return false;
    },

    find(target){
        let counter = 0;
        let tmp = node(this.value, this.next);
        while (tmp) {
            if (tmp.value === target) {
                return counter
            }
            else {
                tmp = tmp.next;
                counter ++
            }
        }
        return false;
    },

    toString(){
        let str="";
        let tmp = node(this.value, this.next);
        while(tmp.next){
            str += `(${tmp.value}) -> `
            tmp.value = tmp.next.value;
            tmp.next = tmp.next.next;
        }
        if(tmp.next === null) {
            str += `(${tmp.value}) -> null`
        }
        return str
    },

    insertAt(value,index) {
        if (index === 0) {this.prepend(value)}
        else {
            let tmp = node(this.value, this.next)
            for (let i =1; i<index; i++) {
                tmp = tmp.next
            }
            let tmpNext = tmp.next
            tmp.next = node(value, tmpNext);
        }
    },

    removeAt(index) {
        if (index === this.size()) {this.pop()}
        else if(index === 0){
            this.value = this.next.value;
            this.next = this.next.next;
        }
        else {
            let tmp = node(this.value, this.next)
            for (let i =1; i<index; i++) {
                tmp = tmp.next;
            }
            tmp.next = tmp.next.next

        }}
}}

function node(value,next) {return {
    value:value,
    next:next,
}}

