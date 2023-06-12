const mapping: Record<string, string> = {
  academies: 'academy',
  'coach-players': 'coach_player',
  'player-profiles': 'player_profile',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
