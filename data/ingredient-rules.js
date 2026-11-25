

window.FRACELIAN_INGREDIENT_RULES = {
  
  declarations: {
    
    containsGluten: "CONTEM GLUTEN",
    
    mayContainGluten: "PODE CONTER GLUTEN",
    
    doesNotContainGluten: "NAO CONTEM GLUTEN"
  },

  
  glutenSources: [
    
    { label: "trigo", terms: ["trigo", "wheat", "farinha de rosca", "semola", "semolina", "bulgur", "espelta", "spelt", "kamut", "triticale", "seitan"] },
    
    { label: "cevada ou malte", terms: ["cevada", "barley", "malte", "malt", "extrato de malte", "extrato de malte de cevada"] },
    
    { label: "centeio", terms: ["centeio", "rye"] },
  
    { label: "aveia", terms: ["aveia", "oat", "oats"] }
  ],

  
  needsSourceReview: [
    
    { label: "amido", terms: ["amido", "amido modificado", "starch", "modified starch"] },
    
    { label: "proteína vegetal", terms: ["proteina vegetal", "proteina hidrolisada", "hydrolyzed vegetable protein"] },
    
    { label: "aromatizante ou extrato", terms: ["aromatizante", "aroma natural", "extrato vegetal", "natural flavor"] }
  ]
};
