function configureExtensions() {
    Object.defineProperty(Array.prototype, "has", {
        value: function has(pred) {
            return this.filter(x =>  pred(x)).length > 0;
        },
        writable: true,
        configurable: true
    });

    Object.defineProperty(Array.prototype, "first", {
        value: function first(pred) {
            if (this.length > 0) return this.filter(x =>  pred(x))[0];
            return null;
        },
        writable: true,
        configurable: true
    });

    Object.defineProperty(Array.prototype, "single", {
        value: function first(pred) {
            if (this.length > 0) {
                const matches = this.filter(x =>  pred(x));
                if (matches.length > 1) throw error;
                if (matches.length === 1) return matches[0];
            }
            return null;
        },
        writable: true,
        configurable: true
    });

    Object.defineProperty(Array.prototype, "remove", {
        value: function remove(pred) {
            return this.filter(x => !pred(x));
        }
    });

    Object.defineProperty(Array.prototype, "sortBy", {
        value: function sortBy(pred) {
            return this.sort((a, b) => {
                ax = pred(a), bx = pred(b);
                if (ax < bx) return -1;
                if (ax > bx) return 1;
                return 0;
            });
        }
    });

    console.log('extensions configured');
}
module.exports = configureExtensions;