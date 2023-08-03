import * as CampaignIcons from './campaigns/icons_campaigns';
import * as CampaignImages from './campaigns/images_campaigns';
import * as BetTypesIcons from './bet_types';
export { default as next } from './next.png';
export { default as previous } from './previous.png';
export { default as google } from './google.png';

const campaigns_icons_map = { toss: CampaignIcons.toss };
const campaigns_images_map = { toss: CampaignImages.toss, wei: CampaignImages.wei };
export { campaigns_icons_map, campaigns_images_map, CampaignIcons, CampaignImages };

const bet_types = { multiple: "Choix multiples", location: "Position sur une carte" }
const bet_types_icons = { multiple: BetTypesIcons.multiple, location: BetTypesIcons.location }
export { bet_types, bet_types_icons };