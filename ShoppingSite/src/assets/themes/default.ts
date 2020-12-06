import {  createMuiTheme, responsiveFontSizes } from '@material-ui/core';

const defaultTheme= responsiveFontSizes(
  createMuiTheme({
    palette: {
      primary: {
        main: '#0080FF',
        dark: '#015179',
        light: '#EDF5F9',
      },
      secondary: {
        main: '#000839',
      },
      info: {
        // TODO: main color needs to be changed
        main: '#0080FF',
        dark: '#0A67C5',
      },
      success: {
        main: '#3CC13B',
        light: '#3CC13B10',
      },
      error: {
        main: '#F03738',
        light: '#F9EFED',
      },
      warning: {
        main: '#F3BB1C',
        light: '#F3BB1C10',
      },
      text: {
        primary: '#001A33',
        secondary: '#999999',
        disabled: '#DDDDDD',
      },
      background: {
        default: '#F7F7FB',
      },
      grey: {
        300: '#E5E5E5',
      },
    },
    typography: {
      fontFamily: ['BrandonTextWeb-Regular'].join(','),
    },
    overrides: {
      MuiAppBar: {
        root: {
          boxShadow: '1px 2px 4px rgba(0, 0, 0, 0.1)',
        },
      },
      MuiToolbar: {
        root: {
          backgroundColor: '#FFFFFF',
        },
      },
      MuiDrawer: {
        paperAnchorDockedLeft: {
          boxShadow: '1px 2px 4px rgba(0, 0, 0, 0.1)',
          borderRight: 'none',
        },
      },
      MuiTypography: {
        body1: {
          fontSize: '1.125rem',
        },
      },
      MuiTableContainer: {
        root: {
          background: '#FFFFFF',
          border: '1px solid rgba(0, 0, 0, 0.1)',
        },
      },
      MuiTableCell: {
        head: {
          color: '#00000080',
        },
        root: {
          padding: '5px',
        },
      },
      MuiCard: {
        root: {
          background: '#FFFFFF',
          border: '1px solid rgba(0, 0, 0, 0.1)',
          boxSizing: 'border-box',
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
        },
      },
      MuiChip: {
        root: {
          borderRadius: '4px',
        },
      },
    },
  }),
);

export default defaultTheme;
