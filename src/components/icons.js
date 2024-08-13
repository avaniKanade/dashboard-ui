import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket, faShoppingBag, faCheck, faPlus, faTimes, faDollarSign, faCircle, faLongArrowAltDown } from '@fortawesome/free-solid-svg-icons';
import { Box } from '@mui/material';

export const BasketIcon = () => {
  const iconColor = '#4a63fa';
  const haloColor = '#1c2d6b';

  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 50,
        backgroundColor: haloColor,
        borderRadius: 2,
        padding: 1,
      }}
    >
      <FontAwesomeIcon icon={faShoppingBasket} style={{ fontSize: 30, color: iconColor }} />
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          backgroundColor: iconColor, 
          borderRadius: '50%',
          padding: 0.5,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: 16,
          height: 16,
        }}
      >
        <FontAwesomeIcon icon={faPlus} style={{ fontSize: 10, color: '#ffffff' }} /> 
      </Box>
    </Box>
  );
};

export const ShoppingBagIcon = () => {
  const iconColor = '#32CD32';
  const haloColor = '#27632c';

  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 50,
        backgroundColor: haloColor,
        borderRadius: 2,
        padding: 1,
      }}
    >
      <FontAwesomeIcon icon={faShoppingBag} style={{ fontSize: 30, color: iconColor }} />
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          backgroundColor: iconColor,
          borderRadius: '50%',
          padding: 0.5,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: 16,
          height: 16,
        }}
      >
        <FontAwesomeIcon icon={faCheck} style={{ fontSize: 10, color: '#ffffff' }} />
      </Box>
    </Box>
  );
};

export const ShoppingBagCanceledIcon = () => {
  const iconColor = '#e74c3c';
  const haloColor = '#992d24';

  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 50,
        backgroundColor: haloColor,
        borderRadius: 2,
        padding: 1,
      }}
    >
      <FontAwesomeIcon icon={faShoppingBag} style={{ fontSize: 30, color: iconColor }} />
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          backgroundColor: iconColor,
          borderRadius: '50%',
          padding: 0.5,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: 16,
          height: 16,
        }}
      >
        <FontAwesomeIcon icon={faTimes} style={{ fontSize: 10, color: '#ffffff' }} />
      </Box>
    </Box>
  );
};

export const RevenueIcon = () => {
  const iconColor = '#ff6f91';
  const haloColor = '#5c2942';

  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 50,
        backgroundColor: haloColor,
        borderRadius: 2,
        padding: 1,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
          width: '100%',
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <Box sx={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <FontAwesomeIcon icon={faCircle} style={{ fontSize: 16, color: iconColor }} />
            <FontAwesomeIcon
              icon={faDollarSign}
              style={{
                fontSize: 8,
                color: '#ffffff',
                position: 'absolute',
              }}
            />
          </Box>
          <FontAwesomeIcon icon={faLongArrowAltDown} style={{ fontSize: 14, color: iconColor, marginTop: 2 }} />
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <FontAwesomeIcon icon={faLongArrowAltDown} style={{ fontSize: 14, color: iconColor }} />
        </Box>
      </Box>
    </Box>
  );
};

export const icons = {
  basket: BasketIcon,
  shoppingBag: ShoppingBagIcon,
  shoppingBagCanceled: ShoppingBagCanceledIcon,
  revenue: RevenueIcon,
};
