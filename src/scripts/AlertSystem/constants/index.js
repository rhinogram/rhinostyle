import keymirror from 'keymirror';

const constants = {
  ActionTypes:    keymirror({
    ADD_ALERT:    null,
    REMOVE_ALERT: null
  }),
  PayloadSources: keymirror({
    VIEW_ACTION: null
  })
};

export default constants;
