import React from 'react';

// Material UI Version 5 https://next.material-ui.com
// INSTALL: npm install @mui/material@next @emotion/react @emotion/styled
// UNINSTALL: npm uninstall @mui/material@next @emotion/react @emotion/styled
import Grid from '@mui/material/Grid';

import profile from './img/sinclair.png';

export default function Profile() {
    return (
      <React.Fragment>
        <Grid container spacing={5}>
          <Grid item lg="9" md="8" sm="8" xs="12" order={{ md: 1, sm: 2, xs: 2 }}>
            <h1>Hello, Sinclair Chin</h1>
            <Grid container spacing={1}>
              <Grid item lg="6" md="6" sm="6" xs="12">
                <p>Email: sinclair_chin@hotmail.com</p>
              </Grid>
              <Grid item lg="6" md="6" sm="6" xs="12">
                <p>Phone: 0416 780 530</p>
              </Grid>
              <Grid item lg="6" md="6" sm="6" xs="12">
                <p>Role: Front-end Development (Intern)</p>
              </Grid>
              <Grid item lg="6" md="6" sm="6" xs="12">
                <p>Industry: CRM</p>
              </Grid>
            </Grid>
          </Grid>
          <Grid item order={{ md: 2, sm: 1, xs: 1 }}>
            <Grid container>
              <Grid item lg="3" md="4" sm="4" xs="12">
                <img src={profile} height="200px" alt="Profile picture" />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </React.Fragment>
    );
}