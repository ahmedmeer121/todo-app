import { create } from "zustand"

export const useProductStore = create((set) => ({
    product: [],
    setProduct: (product) => set({ product }),
    createProduct: async (newProduct) => {
        if (!newProduct.name || !newProduct.image || newProduct.price) {
            return { success: false, message: "please fill all fields" }
        }
        const res = await fatch("/api/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify(newProduct)
        })
        const data = await res.json();

        set((state)=>({product:[...state.product, data.data]}));
        return {success: true, message: "Product created successfully"}
    }
}))