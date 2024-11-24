export const applyFilter = (params: any, queryBuilder: any) => {
  Object.entries(params).forEach(([key, value]) => {
    if (key.includes(".")) {
      const [relation, field] = key.split(".");
      queryBuilder.andWhere(`${relation}.${field} = :${key}`, { [key]: value });
    } else {
      queryBuilder.andWhere(`actor.${key} = :${key}`, { [key]: value });
    }
  });
};
