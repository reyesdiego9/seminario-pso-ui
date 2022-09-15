import { Toolbar, Typography } from '@mui/material';

interface HeaderTableProps {
  title: String;
}

const HeaderTable = (props: HeaderTableProps) => {
  const { title } = props;
  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
      }}
    >
      <Typography
        sx={{ flex: '1 1 100%' }}
        variant="h6"
        id="tableTitle"
        component="div"
      >
        {title}
      </Typography>
    </Toolbar>
  );
};

export default HeaderTable;
