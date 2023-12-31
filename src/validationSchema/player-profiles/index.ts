import * as yup from 'yup';

export const playerProfileValidationSchema = yup.object().shape({
  notes: yup.string(),
  observations: yup.string(),
  player_id: yup.string().nullable().required(),
});
