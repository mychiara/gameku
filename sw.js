const CACHE_NAME = "dunia-anak-cache-v1";

const ASSETS_TO_CACHE = [
  "./",
  "./index.html",
  "./index.css",
  "./manifest.json",
  "./js/core.js",
  "./js/alphabet_db.js",
  "./js/games/music.js",
  "./js/games/flags.js",
  "./js/games/weather.js",
  "./js/games/time_sequence.js",
  "./js/games/transport.js",
  "./js/games/family.js",
  "./js/games/food_sort.js",
  "./js/games/hygiene.js",
  "./js/games/school.js",
  "./js/games/shopping.js",
  "./js/games/word_scramble.js",
  "./js/games/maze.js",
  "./js/games/animal_matching.js",
  "./js/games/number_sort.js",
  "./js/games/missing_letter.js",
  "./js/games/direction.js",
  "./js/games/flying_animal.js",
  "./js/games/water_animal.js",
  "./js/games/catch_ball.js",
  "./js/games/fast_target.js",
  "./js/games/balloon_pop.js",
  "./js/games/catch_star.js",
  "./js/games/bug_smash.js",
  "./js/games/drag_fruit.js",
  "./js/games/shape_hole.js",
  "./js/games/block_stack.js",
  "./js/games/draw_line.js",
  "./js/games/bubble_pop.js",
  "./js/games/whack_mole.js",
  "./js/games/find_object.js",
  "./js/games/sliding_puzzle.js",
  "./js/games/coloring.js",
  "./js/games/digital_clock.js",
  "./js/games/ensiklo_indo.js",
  "./js/games/physics_stack.js",
  "./js/games/pizza_fraction.js",
  "./js/games/weather_clothes.js",
  "./js/games/bee_coding.js",
  "./js/games/fossil_gali.js",
  "./js/games/fruit_balance.js",
  "./js/games/tooth_brush.js",
  "./js/games/taxonomy_sort.js",
  "./js/games/symmetry_play.js",
  "./js/games/life_cycle.js",
  "./js/games/map_explorer.js",
  "./js/games/fossil_match.js",
  "./js/games/recipe_steps.js",
  "./js/games/sempoa_cilik.js",
  "./js/games/hidden_objects.js",
  "./js/games/packing_master.js",
  "./js/games/constellations.js",
  "./js/games/aim_practice.js",
  "./js/games/line_tracer.js",
  "./js/games/laundry_sort.js",
  "./js/games/healthy_plate.js",
  "./js/games/home_safety.js",
  "./js/games/recycle_factory.js",
  "./js/games/animal.js",
  "./js/games/alphabet.js",
  "./js/games/math.js",
  "./js/games/memory.js",
  "./js/games/puzzle.js",
  "./js/games/color.js",
  "./js/games/habit.js",
  "./js/games/odd.js",
  "./js/games/counting.js",
  "./js/games/pattern.js",
  "./js/games/shadow.js",
  "./js/games/emotion.js",
  "./js/games/scale.js",
  "./js/games/opposite.js",
  "./js/games/job.js",
  "./js/games/habitat.js",
  "./js/games/mixing.js",
  "./js/games/trash.js",
  "./js/games/shapeMatch.js",
  "./js/games/clock.js",
  "./js/games/body.js",
  "./js/games/traffic.js",
  "./js/games/space.js",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    }),
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);
          }
        }),
      );
    }),
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // Return cached response if found
      if (response) {
        return response;
      }

      // Otherwise fetch from network and cache it dynamically
      return fetch(event.request)
        .then((fetchResponse) => {
          // Check for a valid response
          if (
            !fetchResponse ||
            fetchResponse.status !== 200 ||
            fetchResponse.type !== "basic"
          ) {
            return fetchResponse;
          }

          const responseToCache = fetchResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            if (
              event.request.method === "GET" &&
              !event.request.url.startsWith("chrome-extension")
            ) {
              cache.put(event.request, responseToCache);
            }
          });

          return fetchResponse;
        })
        .catch(() => {
          // You can return a fallback offline page here if needed
          console.log(
            "Offline mode - resource not found in cache",
            event.request.url,
          );
        });
    }),
  );
});
