import React from 'react';

import SearchInput from '@unp/app/components/inputs/SearchInput';
import Modal from '@unp/app/components/modal/Modal';
import CollectionList from '@unp/app/collections/components/CollectionList';
import { searchCollections } from '@unp/app/collections/lib/data/data';
import { addAction } from '../../lib/actions/actions';

import './styles/addToCollections.css';
import Plus from '../icons/Plus';

type Props = {
  photoId: string;
  queryCollection: string;
  open?: boolean;
};

export default async function AddToCollections({
  photoId,
  queryCollection,
  open,
}: Props) {
  const collections = await searchCollections(queryCollection, photoId);

  return (
    <Modal
      id="add-to-collections"
      className="add_to__collections"
      open={open}
      close={{ back: true }}
    >
      <div className="add_collections_content">
        <header>
          <h3>Add to Collections</h3>
        </header>
        <section>{collections?.length || 0} matches</section>
        <section key={queryCollection}>
          <SearchInput className="search_collections" paramName="collection" />
        </section>
        <section className="add_collections_list">
          <CollectionList
            collections={collections || []}
            actionName="Add to Collection"
            actionIcon={<Plus />}
            action={async (collectId) => {
              'use server';
              await addAction(collectId, photoId);
            }}
          />
        </section>
      </div>
    </Modal>
  );
}
