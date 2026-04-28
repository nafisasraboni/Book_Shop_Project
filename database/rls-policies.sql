create or replace function public.is_admin(user_id uuid)
returns boolean
language sql
security definer
set search_path = public
stable
as $$
  select exists (
    select 1
    from public.profiles
    where id = user_id
      and role = 'admin'
  );
$$;

grant execute on function public.is_admin(uuid) to anon, authenticated;

alter table public.profiles enable row level security;
alter table public.products enable row level security;
alter table public.cart_items enable row level security;
alter table public.orders enable row level security;
alter table public.order_items enable row level security;
alter table public.payments enable row level security;
alter table public.contact_messages enable row level security;

drop policy if exists "profiles select own or admin" on public.profiles;
drop policy if exists "profiles insert own user profile" on public.profiles;
drop policy if exists "profiles update own user profile" on public.profiles;
drop policy if exists "profiles admin manage" on public.profiles;

create policy "profiles select own or admin"
on public.profiles
for select
to authenticated
using (id = auth.uid() or public.is_admin(auth.uid()));

create policy "profiles insert own user profile"
on public.profiles
for insert
to authenticated
with check (id = auth.uid() and role = 'user');

create policy "profiles update own user profile"
on public.profiles
for update
to authenticated
using (id = auth.uid())
with check (id = auth.uid() and role = 'user');

create policy "profiles admin manage"
on public.profiles
for all
to authenticated
using (public.is_admin(auth.uid()))
with check (public.is_admin(auth.uid()));

drop policy if exists "products public read active" on public.products;
drop policy if exists "products admin manage" on public.products;

create policy "products public read active"
on public.products
for select
to anon, authenticated
using (is_active = true or public.is_admin(auth.uid()));

create policy "products admin manage"
on public.products
for all
to authenticated
using (public.is_admin(auth.uid()))
with check (public.is_admin(auth.uid()));

drop policy if exists "cart own select" on public.cart_items;
drop policy if exists "cart own insert" on public.cart_items;
drop policy if exists "cart own update" on public.cart_items;
drop policy if exists "cart own delete" on public.cart_items;

create policy "cart own select"
on public.cart_items
for select
to authenticated
using (user_id = auth.uid());

create policy "cart own insert"
on public.cart_items
for insert
to authenticated
with check (user_id = auth.uid());

create policy "cart own update"
on public.cart_items
for update
to authenticated
using (user_id = auth.uid())
with check (user_id = auth.uid());

create policy "cart own delete"
on public.cart_items
for delete
to authenticated
using (user_id = auth.uid());

drop policy if exists "orders own or admin select" on public.orders;
drop policy if exists "orders admin update" on public.orders;

create policy "orders own or admin select"
on public.orders
for select
to authenticated
using (user_id = auth.uid() or public.is_admin(auth.uid()));

create policy "orders admin update"
on public.orders
for update
to authenticated
using (public.is_admin(auth.uid()))
with check (public.is_admin(auth.uid()));

drop policy if exists "order items own or admin select" on public.order_items;

create policy "order items own or admin select"
on public.order_items
for select
to authenticated
using (
  exists (
    select 1
    from public.orders
    where orders.id = order_items.order_id
      and (orders.user_id = auth.uid() or public.is_admin(auth.uid()))
  )
);

drop policy if exists "payments own or admin select" on public.payments;

create policy "payments own or admin select"
on public.payments
for select
to authenticated
using (
  exists (
    select 1
    from public.orders
    where orders.id = payments.order_id
      and (orders.user_id = auth.uid() or public.is_admin(auth.uid()))
  )
);

drop policy if exists "contact anyone insert" on public.contact_messages;
drop policy if exists "contact admin select" on public.contact_messages;

create policy "contact anyone insert"
on public.contact_messages
for insert
to anon, authenticated
with check (true);

create policy "contact admin select"
on public.contact_messages
for select
to authenticated
using (public.is_admin(auth.uid()));

drop policy if exists "product images public read" on storage.objects;
drop policy if exists "product images admin insert" on storage.objects;
drop policy if exists "product images admin update" on storage.objects;
drop policy if exists "product images admin delete" on storage.objects;

create policy "product images public read"
on storage.objects
for select
to anon, authenticated
using (bucket_id = 'product-images');

create policy "product images admin insert"
on storage.objects
for insert
to authenticated
with check (bucket_id = 'product-images' and public.is_admin(auth.uid()));

create policy "product images admin update"
on storage.objects
for update
to authenticated
using (bucket_id = 'product-images' and public.is_admin(auth.uid()))
with check (bucket_id = 'product-images' and public.is_admin(auth.uid()));

create policy "product images admin delete"
on storage.objects
for delete
to authenticated
using (bucket_id = 'product-images' and public.is_admin(auth.uid()));

-- Orders, order_items, payments, and admin product writes should be created through
-- Cloudflare Pages Functions with the service role key. The service role bypasses
-- RLS, so server-side validation remains the source of truth for prices, totals,
-- and roles.
