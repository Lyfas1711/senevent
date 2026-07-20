-- =====================================================
-- ACTIVATION DE LA ROW LEVEL SECURITY
-- =====================================================

alter table public.profiles
enable row level security;

alter table public.evenements
enable row level security;

alter table public.inscriptions
enable row level security;


-- =====================================================
-- POLITIQUES POUR LA TABLE EVENEMENTS
-- =====================================================

-- Tout le monde peut lire les événements
create policy "evenements_select_public"
on public.evenements
for select
using (true);


-- Seul un utilisateur connecté peut créer un événement
-- Il doit être lui-même l'organisateur
create policy "evenements_insert_auth"
on public.evenements
for insert
to authenticated
with check (
    organisateur_id = auth.uid()
);


-- Seul l'organisateur peut modifier son événement
create policy "evenements_update_owner"
on public.evenements
for update
to authenticated
using (
    organisateur_id = auth.uid()
);


-- Seul l'organisateur peut supprimer son événement
create policy "evenements_delete_owner"
on public.evenements
for delete
to authenticated
using (
    organisateur_id = auth.uid()
);


-- =====================================================
-- POLITIQUES POUR LA TABLE PROFILES
-- =====================================================

-- Tout le monde peut lire les profils
create policy "profiles_select_public"
on public.profiles
for select
using (true);


-- Un utilisateur peut créer uniquement son propre profil
create policy "profiles_insert_self"
on public.profiles
for insert
to authenticated
with check (
    id = auth.uid()
);


-- Un utilisateur peut modifier uniquement son propre profil
create policy "profiles_update_self"
on public.profiles
for update
to authenticated
using (
    id = auth.uid()
);


-- =====================================================
-- POLITIQUES POUR LA TABLE INSCRIPTIONS
-- =====================================================

-- Tout le monde peut lire les inscriptions
create policy "inscriptions_select_public"
on public.inscriptions
for select
using (true);


-- Un utilisateur peut s'inscrire uniquement lui-même
create policy "inscriptions_insert_self"
on public.inscriptions
for insert
to authenticated
with check (
    utilisateur_id = auth.uid()
);


-- Un utilisateur peut supprimer uniquement sa propre inscription
create policy "inscriptions_delete_self"
on public.inscriptions
for delete
to authenticated
using (
    utilisateur_id = auth.uid()
);