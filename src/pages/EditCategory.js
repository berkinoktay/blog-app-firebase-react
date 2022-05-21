import React from 'react';

import AddCategoryForm from '../components/Panel/AddCategoryForm';
import CategoriesTable from '../components/Panel/CategoriesTable';

const EditCategory = () => {
  return (
    <div className="flex gap-10">
      <AddCategoryForm className={'w-2/6'} />
      <CategoriesTable />
    </div>
  );
};

export default EditCategory;
