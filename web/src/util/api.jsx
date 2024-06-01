export const searchDatabase = async (query) => {
    const response = await fetch(`/api/search?q=${query}`);
    if (!response.ok) {
      throw new Error('Failed to fetch search results');
    }
    const data = await response.json();
    return data;
  };

  const API_URL = 'http://url_od_tvoj_backend';
  // Fetch all categories
export const fetchCategories = async () => {
    const response = await fetch(`${API_URL}/categories`, {
      method: 'GET',
      headers: {
     'Content-Type': 'application/json',
      },
      });
      return response.json();
  };
  
  // Fetch all items
  export const fetchItems = async () => {
     const response = await fetch(`${API_URL}/items`, {
     method: 'GET',
     headers: {
     'Content-Type': 'application/json',
      },
     });
    return response.json();
  };
  
  // Fetch all suppliers
  export const fetchSuppliers = async () => {
    const response = await fetch(`${API_URL}/suppliers`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      },
      });
    return response.json();
  };
  
  // Categories
  export const addCategory = async (category) => {
    const response = await fetch(`${API_URL}/categories`, {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json',
     },
     body: JSON.stringify(category),
    });
    return response.json();
  };
  
  export const editCategory = async (id, category) => {
    const response = await fetch(`${API_URL}/categories/${id}`, {
    method: 'PUT',
    headers: {
    'Content-Type': 'application/json',
     },
     body: JSON.stringify(category),
    });
    return response.json();
  };
  
  export const deleteCategory = async (id) => {
    const response = await fetch(`${API_URL}/categories/${id}`, {
   method: 'DELETE',
    });
    return response.json();
  };
  
  // Items
  export const addItem = async (item) => {
    const response = await fetch(`${API_URL}/items`, {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json',
     },
     body: JSON.stringify(item),
    });
    return response.json();
  };
  
  export const editItem = async (id, item) => {
    const response = await fetch(`${API_URL}/items/${id}`, {
     method: 'PUT',
     headers: {
     'Content-Type': 'application/json',
      },
     body: JSON.stringify(item),
    });
    return response.json();
  };
  
  export const deleteItem = async (id) => {
    const response = await fetch(`${API_URL}/items/${id}`, {
    method: 'DELETE',
    });
    return response.json();
  };
  
  // Suppliers
  export const addSupplier = async (supplier) => {
    const response = await fetch(`${API_URL}/suppliers`, {
     method: 'POST',
     headers: {
     'Content-Type': 'application/json',
     },
     body: JSON.stringify(supplier),
    });
    return response.json();
  };
  
  export const editSupplier = async (id, supplier) => {
    const response = await fetch(`${API_URL}/suppliers/${id}`, {
     method: 'PUT',
     headers: {
      'Content-Type': 'application/json',
      },
      body: JSON.stringify(supplier),
     });
    return response.json();
  };
  
  export const deleteSupplier = async (id) => {
    const response = await fetch(`${API_URL}/suppliers/${id}`, {
    method: 'DELETE',
    });
    return response.json();
  };
  