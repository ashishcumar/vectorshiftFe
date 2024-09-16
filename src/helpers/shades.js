export const theme = {
  colors: {
    primaryLight: "rgb(146, 148, 245)",
    primaryDark: "rgb(99, 102, 241)",
    secondaryLight: '#6c737f',
    secondaryDark: '#6F6C8B',
    hoverBorder: '#A9ABF7',
  },
  shadows: {
    hoverShadow: '0px 0px 0px 4px #cecffc',
  },
  components: {
    Input: {
      variants: {
        outline: {
          field: {
            _focus: {
              borderColor: 'rgb(99, 102, 241)', 
              boxShadow: '0 0 0 1px rgb(99, 102, 241)',
            },
          },
        },
      },
    },
    Select: {
      variants: {
        outline: {
          field: {
            _focus: {
              borderColor: 'rgb(99, 102, 241)',
              boxShadow: '0 0 0 1px rgb(99, 102, 241)',
            },
          },
        },
      },
    },
  },
}




