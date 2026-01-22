/**
 * NEXTSTEP SYSTEM v4 - Par Israel Jules-Christ SAHOUEGNON
 * Gestion de l'authentification et de la messagerie de groupe simulée.
 * Couleurs modernes, interaction réaliste pour la jeunesse africaine.
 */

document.addEventListener('DOMContentLoaded', () => {
    
    /* --- 1. GESTION DE L'INSCRIPTION (Redirection vers Discussion) --- */
    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Bloque le rechargement standard
            
            const btn = document.getElementById('btnSignup');