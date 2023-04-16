import Tooltip from '@mui/material/Tooltip';

function ContactIcon(props) {
  const { link, text, img, altText } = props;

  return (
    <Tooltip title={ text } placement="top">
      <a href={ link}><img className="non-draggable" src={ img } alt={ altText } /></a>
    </Tooltip>
  );
}

export default ContactIcon;
