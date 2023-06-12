export const getContacts = state =>  state.contacts.items.filter(({ name }) => name.toLowerCase().includes(state.filter));
export const getfilter = state => state.filter;
export const getLoadingStatus = state => state.contacts.isLoading;
export const getErrorStatus = state => state.contacts.error;

