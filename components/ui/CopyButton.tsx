import React from 'react';
import { Button } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

interface CopyButtonProps {
  onClick: () => void;
}

export function CopyButton({ onClick }: CopyButtonProps) {
  return (
    <Button onClick={onClick} sx={{ ml: 1 }}>
      <ContentCopyIcon />
    </Button>
  );
}