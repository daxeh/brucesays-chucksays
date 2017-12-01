/**
 * Adhoc non-persistent model for development purposes (single session).
 * @type {{}}
 */
const m = {};

const AdhocModel = {
    add: (k, v) => {
        m[ k ] = v;
        //console.log(m);
    },
    remove: (k) => {
        if (m.includes(k)) {
            m[ k ] = undefined;
        }
        //console.log(m);
    },
    retrieve: (k) => {
        if (m.includes(k)) {
            return m[ k ];
        }
    },
    size: () => {
        return m.length;
    },
    print: () => {
        console.log(m);
    }
}
export default AdhocModel;
