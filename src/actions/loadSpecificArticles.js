import { push } from 'react-router-redux';

export const selectedSource  = (source_id) => {
    console.log(source_id);
    return {
        type: 'Source_Selected',
        payload: source_id
      }
    // return this.props.dispatch('/articles');
}