import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';

import MenuItem from '../menu-item/menu-item.component';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';

const Directory = ({ sections }) => {
  return (
    <StyledDirectoryMenu>
      {sections.map(({ id, ...sectionProps }) => (
        <MenuItem key={id} {...sectionProps} />
      ))}
    </StyledDirectoryMenu>
  );
};

const StyledDirectoryMenu = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
