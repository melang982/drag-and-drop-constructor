import IconAddComponent from './icons/IconAddComponent';

interface EmptyZoneProps {
  canDrop?: boolean;
}

const EmptyZone = ({ canDrop }: EmptyZoneProps) => {
  return (
    <div className={'empty' + (canDrop ? ' empty-candrop' : '')}>
      <IconAddComponent />
      <strong>Перетащите сюда</strong> любой элемент
      <br />
      из левой панели
    </div>
  );
};

export default EmptyZone;
