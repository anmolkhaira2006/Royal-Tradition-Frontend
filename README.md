# Royal-Tradition-Frontend

Royal Tradition — "Brew the Royal Tradition"

A premium, minimalist "Coming Soon" landing page designed for a high-end Indian chai premix brand. This project translates the elegance of royal Indian heritage into a modern, responsive digital experience.
🔗 Live Demo

Experience the live interface here: https://royaltradition.netlify.app/

✨ Design Philosophy

The UI is built on the principle of "Quiet Luxury." Every element is designed to feel intentional and premium:

Color Palette: A deep, rich Umber background (#1a0f0a) provides a canvas for Silk Cream (#fdfcf0) and Royal Gold (#c5a059) accents.

Typography: Pairs the sophisticated, regal serifs of Cormorant Garamond with the clean, modern geometry of Montserrat.

Atmosphere: A procedural JavaScript particle system generates subtle "steam" curls, creating a warm, sensory experience for the user.

🚀 Key Features

Fully Responsive Architecture: Optimized for Mobile (compact, high-touch efficiency), Tablet (balanced spacing), and Desktop (immersive parallax).

Premium Micro-interactions:

The Gilded Sweep: A light-sweep hover effect on the primary CTA.

Tactile Feedback: Slightly curved edges (8px) and scale transitions on tap/hover for an aesthetic feel.

Desktop Parallax: Subtle mouse-tracking on the logo and hero content to add depth.

Optimized Notifications: A custom toast system that handles rapid user interactions without animation overlap, using visibility guards to prevent phantom elements on mobile.

Procedural Particles: Lightweight JS-driven background steam that adapts its density based on the device's screen size to preserve performance.

🛠️ Technical Stack

HTML5: Semantic structure for SEO and accessibility.

CSS3: - Custom Properties (Variables) for easy branding updates.

clamp() logic for fluid typography across all viewports.

Cubic-bezier transitions for "luxury" motion.

JavaScript (Vanilla):

Procedural animation logic.

Intersection-free notification management.

Lucide Icon integration.

📁 Project Structure

The project is consolidated into a single-file architecture (index.html) to ensure maximum portability and instant synchronization within preview environments. It is organized into three distinct sections:

Style Section: Contains all layout, typography, and animation definitions.

Structure Section: The semantic HTML framework of the page.

Logic Section: The JavaScript powering icons, particles, parallax, and form handling.

📖 How to Use

Direct View: Open the index.html file in any modern web browser.

Customization: - To change colors, update the :root variables in the <style> section.

To update the launch date, edit the text inside the .launch-badge div.

This project was developed with a focus on high-end frontend craftsmanship, meeting rigorous requirements for brand fit, code quality, and mobile responsiveness.
