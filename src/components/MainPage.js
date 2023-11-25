// src/components/MainPage.js
import React from 'react';
import { Drawer, List, ListItem, ListItemText, CssBaseline, AppBar, Toolbar, Typography } from '@mui/material';

const MainPage = () => {
  return (
    <div>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" noWrap>
            Sistema Imobiliário
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent">
        <List>
          <ListItem button>
            <ListItemText primary="Propriedades" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Status de Aluguéis" />
          </ListItem>
          {/* Adicione mais itens de menu conforme necessário */}
        </List>
      </Drawer>
      <main>
        {/* Conteúdo principal da página */}
        <div style={{ padding: 20 }}>
          <Typography paragraph>
            Bem-vindo ao sistema imobiliário.
          </Typography>
        </div>
      </main>
    </div>
  );
};

export default MainPage;
